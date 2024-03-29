import { NextResponse } from 'next/server'
import neosets from './neosets'

export async function GET(request, { params: { title } }) {

    let neoset = neosets.find(el => el.href === title)

    return new NextResponse.json(neoset)
}