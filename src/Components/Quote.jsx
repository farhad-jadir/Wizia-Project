import React from 'react';
import {Pagination} from "@nextui-org/react";

function Quote() {
  return (
    <section className=''>
        <div className='grid grid-cols-1 justify-items-center'>
            <img src="quote.png" alt="" />
            <Pagination showControls total={10} initialPage={1} />
            <p>Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
        </div>
        <div className='grid grid-cols-1 justify-items-center'>
            <h1>John Doe</h1>
            <p>Chief Strategy Officer @ Company</p>
        </div>
    </section>
  )
}

export default Quote
