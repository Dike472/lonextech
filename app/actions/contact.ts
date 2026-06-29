'use server'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

export async function sendContactEmail(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name    = (formData.get('name')    as string)?.trim()
  const email   = (formData.get('email')   as string)?.trim()
  const phone   = (formData.get('phone')   as string)?.trim() || 'Not provided'
  const message = (formData.get('message') as string)?.trim()

  if (!name || !email || !message) {
    return { status: 'error', message: 'Please fill in all required fields.' }
  }

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_KEY,
        subject: `New portfolio message from ${name}`,
        from_name: name,
        email,
        phone,
        message,
      }),
    })

    const text = await res.text()
    console.log('[contact] Raw response:', res.status, text)

    let data: Record<string, unknown> = {}
    try { data = JSON.parse(text) } catch { /* not JSON */ }

    if (!res.ok || !data.success) {
      console.error('[contact] Web3Forms error:', data)
      return { status: 'error', message: `Error ${res.status}: ${data?.message ?? text}` }
    }

    return { status: 'success', message: "Message sent! I'll reply within 24 hours." }
  } catch (err) {
    console.error('[contact] Exception:', err)
    return { status: 'error', message: 'Something went wrong. Please try again or email me directly.' }
  }
}
