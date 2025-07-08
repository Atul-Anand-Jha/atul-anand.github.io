import { NextRequest, NextResponse } from 'next/server'

// In production, this should be in environment variables and use proper authentication
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'ml-admin-2025'

// In production, this would connect to a database
let completedItems: number[] = [1, 15, 31, 47, 66, 77, 78, 79, 81] // Example completed items

export async function GET() {
  return NextResponse.json({ completedItems })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { password, completedItems: newCompletedItems } = body

    // Verify admin password
    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Validate the data
    if (!Array.isArray(newCompletedItems)) {
      return NextResponse.json(
        { error: 'Invalid data format' },
        { status: 400 }
      )
    }

    // Update completed items (in production, save to database)
    completedItems = newCompletedItems.filter(id => 
      typeof id === 'number' && id >= 1 && id <= 100
    )

    return NextResponse.json({ 
      success: true, 
      completedItems: completedItems 
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
