import styles from './FoodRecipeDetail.module.css'
import BreakCrumbs from './BreakCrumbs';
import { Link } from "react-router-dom";
function FoodReciprDetail() {
  const foodIngredient = [
    {
      name: 'Gừng',
      count: 2,
      imageURL: 'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2021/10/28/gung-co-tac-dung-gi-2-1635438675606590955706.jpg'
    },
    {
      name: 'Ớt',
      count: 2,
      imageURL: 'https://vcdn-suckhoe.vnecdn.net/2019/09/02/qua-o-t-jpeg-1567388531-5300-1567389132.png'
    },
    {
      name: 'Gia vị',
      count: 1,
      imageURL: 'https://cdn.tgdd.vn/2020/12/content/11-800x500-5.jpg'
    },
    {
      name: 'Cá trắm',
      count: 1,
      imageURL: 'https://cdn.abphotos.link/photos/resized/1024x/2022/10/05/1664945319_Hzc9Ifj6rshCbXYE_1664946047-phpnn0ggf.png'
    }
  ]

  const moreImage = [
      {
        imageURL: 'https://www.huongnghiepaau.com/wp-content/uploads/2016/05/ca-loc-kho-to-tham-dam-gia-vi.jpg'
      },
      {
        imageURL: 'https://i0.wp.com/caboptuoisong.com/images/caboptuoisongcom/2017/03/cach-lam-ca-bop-kho-to-dam-da-ngon.jpg'
      },
      {
        imageURL: 'https://cdn.tgdd.vn/Files/2021/02/23/1329799/bi-quyet-nau-ca-kho-to-ngon-chuan-vi-ca-dai-mau-sac-chuan-dep-202102231139008474.jpg'
      }
  ]
  const moreSimilarFood = [
    {
      name: 'Trứng kho',
      imageURL : 'https://cdn3.ivivu.com/2020/12/cach-lam-trung-kho-nuoc-tuong-sieu-de-nhung-rat-dua-com-ivivu-1.jpg'
    },
    {
      name: 'Thịt kho tàu',
      imageURL : 'https://static-images.vnncdn.net/files/publish/2023/3/31/thit-kho-tau-2-183.jpg'
    },
    {
      name: 'Tôm kho thịt',
      imageURL : 'https://cdn.tgdd.vn/Files/2021/02/23/1329799/bi-quyet-nau-ca-kho-to-ngon-chuan-vi-ca-dai-mau-sac-chuan-dep-202102231139008474.jpg'
    },
    {
      name: 'Gà kho',
      imageURL : 'https://cdn.tgdd.vn/2021/01/CookProduct/gathum-1200x676.jpg'
    }
  ]
  return (
    <div className='mx-12 mt-8'>
    <div className={styles.breakcrumb}>
      <BreakCrumbs/>
    </div>
    <div className={styles.foodRecipeDetail}>
      <div className={styles.foodImage}>
        <img src='https://beptruong.edu.vn/wp-content/uploads/2019/12/ca-kho-to-mien-nam.jpg' alt='Mon an'></img>
      </div>
      <div className={styles.foodRecipe}>
        <p className={styles.text}>Cá Trắm Kho Tộ </p>
        <div style={{marginLeft: '50px'}}>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
          <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
          <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
          <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
          <svg className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
          <Link to='/comment'>
          <p className='ms-1 text-sm font-medium text-gray-500 dark:text-gray-500'> | 5 Khách hàng đã bình luận </p>
          </Link>
        </div>
        <div style={{display: 'flex', flexDirection: 'column',marginTop:'20px'}}>
          <p style={{display: 'flex' , fontSize: '28px', fontWeight: 500}}>Thành Phần</p>
          {foodIngredient.map( result =>(
          <div className={styles.ingredient}>
            <div style={{display: 'flex',flexDirection: 'column'}}>
              <p style={{display: 'flex',fontSize: '18px'}}>{result.name} </p>
              <p style={{display: 'flex',fontSize: '16px'}}>Số Lượng: {result.count}</p>
            </div>
            <div className={styles.ingredientImage}>
              <img src={result.imageURL} alt='nguyen lieu'/>
            </div>
          </div>
          ))}
          <p style={{fontSize: '14px', color: 'blue', cursor: 'pointer'}}>Xem Thêm </p>
          <div className={styles.shareAndComment}>
            <div className={styles.icon}>
              <a href='https://www.facebook.com'>
                <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512">
                  <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/>
                </svg>
              </a>
              <a href='https://www.linkedln.com'>
                <svg xmlns="http://www.w3.org/2000/svg" height="34" width="32" viewBox="0 0 448 512">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                </svg>
              </a>
              <a href='https://www.twitter.com'>
                <svg xmlns="http://www.w3.org/2000/svg" height="34" width="34" viewBox="0 0 448 512">
                  <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z"/>
                </svg>
              </a>
            </div>
            <div className={styles.reviews}>Đánh giá món ăn</div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div className={styles.foodDescription}>
      <div style={{display: 'flex', flexDirection:'column'}}>
        <div className={styles.title}>
          <p className={styles.titleText}>Mô tả </p>
          <p className={styles.titleText}>Video hướng dẫn </p>
          <p className={styles.titleText}>Cách bảo quản thực phẩm</p>
        </div>
        <div className={styles.description}>
          <p >Sản phẩm hiện tại đang không có dữ liệu về món ăn này</p>
        </div>
      </div>
      <div className={styles.moreImage}>
      { 
        moreImage.map(result => ( 
          <img src={result.imageURL} alt='hinh anh'></img>
          ))
      }
      </div>
    </div>
    <div className={styles.foodSimilar}>
      <p style={{fontSize: '32px', fontWeight: '500'}}>Các sản phẩm tương tự </p>
      <div className={styles.foodSimilarImage}>
        {
          moreSimilarFood.map(result => (
            <div className={styles.similarFoodTitle}>
              <img src={result.imageURL} alt='hinh anh'/>
              <p style={{flex: 1, fontSize: '18px', marginTop: '20px'}}>{result.name}</p>
            </div>
          ))
        }
       
      </div>
      <button className={styles.moreProduct}>Xem Thêm </button>
    </div>
    </div>
  )
}

export default FoodReciprDetail;
