import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const { email, message = '' } = await request.json()

    if (!email) {
      console.error('加入等待列表失败: 邮箱地址为空')
      return NextResponse.json(
        { error: '邮箱地址是必需的' },
        { status: 400 }
      )
    }

    console.log(`尝试将邮箱 ${email} 添加到等待列表`)
    console.log('Supabase客户端状态:', {
      url: process.env.NEXT_PUBLIC_SUPABASE_URL,
      hasAnonKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    })

    const { error } = await supabase
      .from('Waitlist')
      .insert([{ email, message }])

    if (error) {
      console.error('Supabase插入错误:', {
        message: error.message,
        code: error.code,
      })
      throw error
    }

    const { count } = await supabase
      .from('Waitlist')
      .select('*', { count: 'exact', head: true })

    console.log(`成功将邮箱 ${email} 添加到等待列表，当前总数: ${count || 0}`)

    return NextResponse.json({ success: true, count: count || 0 })
  } catch (error: any) {
    console.error('加入等待列表失败:', {
      message: error.message,
      code: error.code,
    })

    return NextResponse.json(
      { error: `加入等待列表失败: ${error.message || '未知错误'}` },
      { status: 500 }
    )
  }
}