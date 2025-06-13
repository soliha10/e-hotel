import articleBg from "../../assets/images/article-bg.png";
const Article = () => {
  return (
    <article className="pb-[100px]">
      <div className="w-[1240px] mx-auto px-5">
        <div className="py-[60px] px-[80px] rounded-[40px]"
       style={{
                backgroundImage: `url(${articleBg})`,
                backgroundRepeat: "no-repeat",               
              }} 
        >
          <div className='w-[610px] '>
            <h2 className=" text-[#232E40]  text-[32px] font-bold mb-4 ">Добро пожаловать в нашу семью арендодателей!</h2>
            <p className="  text-[18px] text-[#777E90] mb-4  tracking-[0.36px]  ">Присоединяйтесь к нашей платформе и делайте свое жилье доступным для туристов. Создайте сотрудничество как
              в Airbnb и начните приключение без слов, станьте частью нашей гостеприимной семьи.</p>
            <button className="w-[183px] p-4 bg-[#3276FF] rounded-2xl text-white   ">Присоединиться</button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Article
