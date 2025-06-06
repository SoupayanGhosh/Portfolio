import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import { Message, MESSAGE_COLLECTION } from '@/lib/models/message'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, subject, message } = body

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Connect to MongoDB
    const client = await clientPromise
    const db = client.db()

    // Create new message
    const newMessage: Message = {
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
    }

    // Insert into database
    await db.collection(MESSAGE_COLLECTION).insertOne(newMessage)

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' }, 
      { status: 201 }
    )
  } catch (error) {
    console.error('Error saving message:', error)
    return NextResponse.json(
      { error: 'Failed to save message' },
      { status: 500 }
    )
  }
}