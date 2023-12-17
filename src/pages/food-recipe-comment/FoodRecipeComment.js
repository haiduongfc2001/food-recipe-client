import CommentBreakCrumb from './BreakCrumbs';
import styles from './FoodRecipeComment.module.css'
import { Link } from "react-router-dom";
import { StarIcon } from './StarIcon';
import ReactStars from "react-rating-stars-component";
function FoodRecipeComment (){
    const foodIngredient = [
        {
          name: "Gừng",
          count: 2,
          imageURL:
            "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2021/10/28/gung-co-tac-dung-gi-2-1635438675606590955706.jpg",
        },
        {
          name: "Ớt",
          count: 2,
          imageURL:
            "https://vcdn-suckhoe.vnecdn.net/2019/09/02/qua-o-t-jpeg-1567388531-5300-1567389132.png",
        },
        {
          name: "Gia vị",
          count: 1,
          imageURL: "https://cdn.tgdd.vn/2020/12/content/11-800x500-5.jpg",
        },
        {
          name: "Cá trắm",
          count: 1,
          imageURL:
            "https://cdn.abphotos.link/photos/resized/1024x/2022/10/05/1664945319_Hzc9Ifj6rshCbXYE_1664946047-phpnn0ggf.png",
        },
      ];
      const moreSimilarFood = [
        {
          name: "Trứng kho",
          imageURL:
            "https://cdn3.ivivu.com/2020/12/cach-lam-trung-kho-nuoc-tuong-sieu-de-nhung-rat-dua-com-ivivu-1.jpg",
        },
        {
          name: "Thịt kho tàu",
          imageURL:
            "https://static-images.vnncdn.net/files/publish/2023/3/31/thit-kho-tau-2-183.jpg",
        },
        {
          name: "Tôm kho thịt",
          imageURL:
            "https://cdn.tgdd.vn/Files/2021/02/23/1329799/bi-quyet-nau-ca-kho-to-ngon-chuan-vi-ca-dai-mau-sac-chuan-dep-202102231139008474.jpg",
        },
        {
          name: "Gà kho",
          imageURL: "https://cdn.tgdd.vn/2021/01/CookProduct/gathum-1200x676.jpg",
        },
      ];
      const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    return (
        <div className="mx-10 mt-8">
            <div className='ml-8'>
                <CommentBreakCrumb />
            </div>
            <div className="flex mr-3 my-8 ml-8">
            <div className={styles.foodImage}>
          <img
            src="https://beptruong.edu.vn/wp-content/uploads/2019/12/ca-kho-to-mien-nam.jpg"
            alt="Mon an"
            className='rounded-lg'
          ></img>
        </div>
        <div className={styles.foodRecipe}>
          <p className={styles.text}>Cá Trắm Kho Tộ </p>
          <div style={{ marginLeft: "50px" }}>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <Link to="/comment">
                <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-500">
                  {" "}
                  | 5 Khách hàng đã bình luận{" "}
                </p>
              </Link>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "20px",
              }}
            >
              <p style={{ display: "flex", fontSize: "28px", fontWeight: 500 }}>
                Thành Phần
              </p>
              {foodIngredient.map((result,index=0) => (
                <div key={index++} className={styles.ingredient}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <p style={{ display: "flex", fontSize: "18px" }}>
                      {result.name}{" "}
                    </p>
                    <p style={{ display: "flex", fontSize: "16px" }}>
                      Số Lượng: {result.count}
                    </p>
                  </div>
                  <div className={styles.ingredientImage}>
                    <img src={result.imageURL} alt="nguyen lieu" />
                  </div>
                </div>
              ))}
              <p style={{ fontSize: "14px", color: "blue", cursor: "pointer" }}>
                Xem Thêm{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.foodDescription}>
        <form className='bg-slate-100 rounded-lg w-full h-72'>
            <div className='flex flex-col -mx-3 mb-3'>
              <h2 className="mx-5 px-4 pt-4 pb-3 text-gray-800 text-xl text-left ">Chia sẻ cảm xúc của bạn về món ăn</h2>
              <div className="h-36 w-auto px-5 mb-2 mt-2 mx-5 ">
                <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-full py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" placeholder='Type Your Comment'></textarea>
              </div>
              <div className='flex items-center justify-end mr-14 mt-5'>
                <div className='flex items-center justify-between mr-20'>
                  <p className='text-lg mr-4'>Đánh giá sao: </p>
                  {/* Star rating  */}
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={28}
                    activeColor="rgb(253 224 71)"
                  />
                </div>
                <div className='cursor-pointer ml-6'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </div>
              </div>
            </div>
        </form>
      </div>
      <div className={styles.userComment}>
        <p className='text-4xl text-left'>Bình luận của người dùng</p>
        <div className='my-8 mx-12'>
          <div className='flex mb-7'>
            <img src='https://i.pinimg.com/1200x/2a/65/3d/2a653d923281fcd64be38a76fc70ef76.jpg' alt='avatar' className='h-14 w-14 object-cover rounded-full'/>
            <div className='flex flex-col ml-5 pr-10 pl-4 py-4 rounded-3xl bg-slate-200 w-auto'>
              <p className='text-lg text-left'>Nguyen Van A</p>
              <div className='flex items-center mt-2'>
                <StarIcon className='mr-1 cursor-pointer'height='16' width='18' fill='rgb(253 224 71)'/>
                <StarIcon className='mr-1 cursor-pointer'height='16' width='18' fill='rgb(253 224 71)'/>
                <StarIcon className='mr-1 cursor-pointer'height='16' width='18' fill='rgb(253 224 71)'/>
                <StarIcon className='mr-1 cursor-pointer'height='16' width='18' fill='rgb(253 224 71)'/>
                <StarIcon className='mr-1 cursor-pointer'height='16' width='18' fill='rgb(253 224 71)'/>
              </div>
              <p className='font-sans text-base text-left mt-4'>Đây là một công thức hoàn hảo do đầu bếp 3 sao Michelin Đỗ Quang Phúc sáng tạo ra. Thật là tuyệt vời</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.foodSimilar}>
        <p style={{ fontSize: "32px", fontWeight: "500" }}>
          Các sản phẩm tương tự{" "}
        </p>
        <div className={styles.foodSimilarImage}>
          {moreSimilarFood.map((result, index = 0) => (
            <div key={index++} className={styles.similarFoodTitle}>
              <img src={result.imageURL} alt="hinh anh" />
              <p style={{ flex: 1, fontSize: "18px", marginTop: "20px" }}>
                {result.name}
              </p>
            </div>
          ))}
        </div>
        <button className={styles.moreProduct}>Xem Thêm </button>
      </div>
    </div>
  );
}

export default FoodRecipeComment;