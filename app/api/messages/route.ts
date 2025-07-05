import { NextRequest, NextResponse } from 'next/server'

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, subject, message } = body

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400, headers: { 'Access-Control-Allow-Origin': '*' } }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400, headers: { 'Access-Control-Allow-Origin': '*' } }
      )
    }

    // STUB: Simulate successful message receipt (no DB)
    return NextResponse.json(
      { success: true, message: 'Message sent successfully (no DB)' },
      { status: 201, headers: { 'Access-Control-Allow-Origin': '*' } }
    )
  } catch (error) {
    console.error('Error handling message:', error)
    return NextResponse.json(
      { error: 'Failed to handle message' },
      { status: 500, headers: { 'Access-Control-Allow-Origin': '*' } }
    )
  }
}