import React from 'react';
import Logo from './Logo';

const cricketNews = [
  {
    id: 1,
    title: "India Clinches Victory in Thrilling Test Match",
    description: "In a nail-biting finish, India secured a historic win against Australia. The match showcased incredible performances from both teams, with key players stepping up during crucial moments. With this victory, India not only solidified its position in the tournament but also ignited hopes for a brighter future in international cricket.",
    img: "https://e0.365dm.com/24/02/2048x1152/skysports-ben-stokes-england_6469498.jpg?20240226081415", 
    link: "https://www.skysports.com/cricket/news/12123/13081340/india-deny-england-and-clinch-series-win-after-thrilling-finale-to-fourth-test-in-ranchi", 
    bgColor: "bg-green-100"
  },
  {
    id: 2,
    title: "Virat Kohli Breaks Another Record",
    description: "Kohli surpasses the legendary Sachin Tendulkar in ODI centuries. This remarkable achievement highlights Kohli's exceptional consistency and skill in the format, further solidifying his status as one of the greatest batsmen in cricket history. Fans and experts alike are now eagerly speculating how many more records Kohli will break as he continues to dominate the game.",
    img: "https://static.toiimg.com/thumb/msid-113283773,imgsize-32650,width-400,resizemode-4/113283773.jpg", 
    link: "https://timesofindia.indiatimes.com/sports/cricket/bangladesh-in-india/how-can-virat-kohli-further-cement-his-position-as-an-all-time-great-in-the-india-vs-bangladesh-series/articleshow/113282546.cms#:~:text=Virat%20Kohli%20is%20set%20to,this%20milestone%20in%20623%20innings.",
    bgColor: "bg-yellow-100"
  },
  {
    id: 3,
    title: "Rohit Sharma's Brilliant Batting Performance",
    description: "Rohit scores a double century in the latest ODI against England. His explosive innings showcased his incredible talent and ability to dominate bowlers, making him a key player for the Indian team. This remarkable performance not only helped secure a vital win but also added to his growing list of records, further establishing him as a powerhouse in limited-overs cricket.",
    img: "https://static.toiimg.com/thumb/msid-111309074,imgsize-41286,width-400,resizemode-4/111309074.jpg", 
    link: "https://timesofindia.indiatimes.com/sports/cricket/icc-mens-t20-world-cup/along-with-batting-rohit-sharma-deserves-to-get-plaudits-for-ishant-sharma-backs-india-for-t20-world-cup-glory/articleshow/111308071.cms",
    bgColor: "bg-blue-100"
  },
  {
    id: 4,
    title: "World Cup 2024: Teams to Watch",
    description: "A preview of the teams that are favorites in the upcoming World Cup. As the tournament approaches, cricket enthusiasts are eagerly analyzing the strengths and weaknesses of each squad. With past champions like India and Australia in the mix, alongside dark horses like Pakistan and South Africa, the competition promises to be thrilling, showcasing some of the best talents in the cricketing world.",
    img: "https://womencricket.com/wp-content/uploads/2024/09/5-Indian-players-to-watch-out-for-in-Women-T20-World-Cup-2024.webp", 
    link: "https://www.firstpost.com/firstcricket/sports-news/womens-t20-world-cup-2024-teams-schedule-groups-time-ist-venues-live-streaming-13818764.html",
    bgColor: "bg-purple-100" 
  },
  {
    id: 5,
    title: "Carey's form creates headache ahead of Champions Trophy",
    description: "Alex Carey’s recent form has sparked concerns for Australia ahead of the upcoming Champions Trophy. Struggling with consistency both behind the stumps and with the bat, Carey’s performance has raised questions about his position in the squad. With the tournament drawing closer, selectors may face a tough decision regarding his place in the playing XI, as Australia aims to field its strongest side for the high-stakes competition.",
    img: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1280,q_70/lsci/db/PICTURES/CMS/387900/387985.6.jpg", 
    link: "https://www.espncricinfo.com/story/eng-vs-aus-3rd-odi-alex-carey-form-creates-headache-ahead-of-champions-trophy-2025-1452506",
    bgColor: "bg-green-100" 
  },
  {
    id: 6,
    title: "Harmanpreet: 'This is our best ever team at a T20 World Cup'",
    description: "Harmanpreet Kaur, captain of the Indian women's cricket team, has declared the current squad as their 'best ever' heading into the T20 World Cup. With a balanced mix of experienced players and promising young talent, Kaur believes the team is well-prepared to make a strong impact in the tournament. The confidence within the squad has grown, as they look to secure India’s first-ever T20 World Cup title.",
    img: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/387900/387970.6.jpg", 
    link: "https://www.espncricinfo.com/story/women-s-t20-world-cup-2024-harmanpreet-kaur-this-is-our-best-ever-team-at-a-t20-world-cup-1452463",
    bgColor: "bg-blue-100" 
  }
];

const NewsSection = () => {
  return (
    <>
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f1f4f0] px-10 py-3">
   <Logo/>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
         
        </div>
        
      </div>
    </header>
    <section className="bg-white p-6">
    <h1 className="text-3xl font-bold text-center my-6">Latest Cricket News</h1>
      <h2 className="text-2xl font-bold mb-4">Cricket News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
        {cricketNews.map((news) => (
          <div key={news.id} className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
            <img src={news.img} alt={news.title} className="w-full h-50 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{news.title}</h3>
              <p className="text-gray-700 mt-2">{news.description}</p>
              <a href={news.link} target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 shadow-lg mt-6">
                    Read More
                  </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default NewsSection;