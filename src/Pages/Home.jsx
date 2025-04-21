import React from 'react'
import HomeSlider from '../Component/Home/HomeSlider'
import Faq from '../Component/Home/Faq'
import Article from '../Component/Home/Article'
import QueriesWelcome from '../Component/Query/QueriesWelcome'
import RecentQuery from '../Component/Home/RecentQuery'


export default function Home() {
  return (
    <div>
      
      <HomeSlider></HomeSlider>
      <QueriesWelcome></QueriesWelcome>
      <RecentQuery></RecentQuery>
      <Article></Article>
      <Faq></Faq>
      
      
    </div>
  )
}
