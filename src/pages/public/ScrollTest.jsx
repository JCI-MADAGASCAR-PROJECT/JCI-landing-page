import React from 'react'
import ScrollStack,{ScrollStackItem } from '@/hooks/ScrollStack'

const ScrollTest = () => {
  return (
    <div className="h-100   w-100 bg-red-500 ">
        <ScrollStack >
            <ScrollStackItem>
                <h2>Card 1</h2>
                <p>This is the first card in the stack</p>
            </ScrollStackItem>
            <ScrollStackItem>
                <h2>Card 2</h2>
                <p>This is the second card in the stack</p>
            </ScrollStackItem>
            <ScrollStackItem>
                <h2>Card 3</h2>
                <p>This is the third card in the stack</p>
            </ScrollStackItem>
        </ScrollStack>
    </div>
  )
}

export default ScrollTest