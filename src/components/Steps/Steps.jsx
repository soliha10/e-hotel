import StepsItem from './StepsItem';
import StepsUser from './StepsUser';
import leftPic from "../../assets/images/Group 9201.png";
import woman from "../../assets/images/woman.png";
import man from "../../assets/images/man.png";

const Steps = () => {

  const steps = [
    {
      stepNum: '01',
      name: 'Регистрация',
      text: 'Зарегистрируйтесь на нашем сайте, чтобы начать путешествие. Укажите свое имя, адрес электронной почты и пароль, чтобы создать учетную запись.'
    },
    {
      stepNum: '02',
      name: 'Выбор отели и даты',
      text: 'Выберите желаемое место проживания и укажите даты вашего пребывания. Просматривайте доступные варианты и добавляйте их в корзину.'
    },
    {
      stepNum: '03',
      name: 'Бронирование и оплата',
      text: 'Перейдите к корзине, где вы сможете проверить и подтвердить ваш выбор. Затем выберите удобный способ оплаты и завершите бронирование. Готово, ваше путешествие официально начато!'
    },
  ];


  return (
    <section >
      <div className=" w-full max-w-[1240px] mx-auto px-5" >
        <div className=' pt-[400px] lg:pt-[252px] pb-[100px] '>
          <h2 className='text-center text-[#232E40] text-2xl md:text-[32px] font-bold mb-4 '>Простые 3 шага для вашего идеального путешествия</h2>
          <p className='text-center text-[18px] text-[#777E90] mb-10 '>Упростите свои планы для путешествия – с нами это легко!</p>
          <div className=' flex relative flex-col lg:flex-row text-center '>
            <img className='md:me-[74px] mb-8  hidden lg:inline-block lg:w-[538px] lg:h-[644px] ' src={leftPic} alt="pic" />
            <StepsUser classname={"absolute top-[42px] left-8 hidden lg:flex "} id={1} userName={"Азиза Муминова"} userPic={woman} />
            <StepsUser classname={"absolute top-[172px] left-96 hidden lg:flex "} id={2} userName={"Андрей Туйгунов"} userPic={man} />
            <ol className='flex flex-col justify-center items-center lg:items-start  gap-6'>
              {steps.map(({ stepNum, name, text }) => (
                <StepsItem stepNum={stepNum} name={name} text={text} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Steps
