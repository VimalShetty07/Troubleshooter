import React, { Fragment } from 'react'
import { Blog } from './Blog'
import { MetaData } from './MetaData'

const blog = {
   title:'Test Title',
    user:'Test User',
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur rerum, explicabo praesentium laborum nihil velit molestias, porro quam facere sint, quibusgiat at eum saepe quaerat quidem sequi nostrum ipsam temporibus vitae molestiae voluptas facere officia? Velit accusantium porro itaque quisquam obcaecati deleniti exercitationem fugit tempora mollitia voluptatibus consequatur necessitatibus odio eius architecto, ducimus sunt, placeat sed dignissiljvjlvj yryuryf bnmbnvm gchcv  mnb mnb m bcnnnb hdhdty jvfuykv  uftyufyftf ituf f tftu f ufit fytfy eserstudytffuyigfyuguy uifu f ufufutfuftu ftufutmos perspiciatis. Nihil nisi, consectetur ratione nam, facilis, aliquam autem assumenda nemo odio eius delectus corporis minima voluptas animi unde tempora in? Eos inventore asperiores dignissimos maiores. Dolore, porro officia explicabo saepe est quo perferendis in sequi ipsum consequatur iste doloribus omnis, eum qui molestias dignissimos aperiam iure corporis facilis nesciunt a. Quidem, obcaecati sequi? Dolorem maiores necessitatibus explicabo nihil nesciunt assumenda sapiente veritatis ad ducimus odio nobis a, neque, est, ratione dolorum doloremque adipisci! Quis, nemo!'
}
export const Home = () => {
  return (
    <Fragment>
        <MetaData title="HOME"/>
        <Blog blog={blog}/>
        <Blog blog={blog}/>
        <Blog blog={blog}/>
        <Blog blog={blog}/>
        <Blog blog={blog}/>
        <Blog blog={blog}/>
        <Blog blog={blog}/>

    
    </Fragment>
  )
}
