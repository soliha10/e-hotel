import React from 'react'

const DetailForm = () => {
  return (
    <div>
      <div>
        <span>
          <img src="" alt="" />
          Meros Group
        </span>
        <span>
          <img src="" alt="" />
          (245 отзывов)
        </span>
      </div>

      <strong>
        <span>от</span>
        $120
        <span>/ночь</span>
      </strong>

      <form action="">
        <div>
          <label htmlFor="">Заезд</label>
          <select name="" id="">
            <option value="">6/11/2023</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Выезд</label>
          <select name="" id="">
            <option value="">7/11/2023</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Количество гостей</label>
          <select name="" id="">
            <option value="">2 взрослых</option>
          </select>
        </div>
        <button>Просмотреть наличие мест </button>
      </form>
      <span>Цены актуальны до 24 ноября, 2023 года</span>
    </div>
  )
}

export default DetailForm
