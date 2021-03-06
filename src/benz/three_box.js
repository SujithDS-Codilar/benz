import './three_box.css';
import imgg1 from './pic1.webp';
import imgg2 from './pic2.webp';
import imgg3 from './pic3.webp';


function Three_Box() {
  return (
    <>
      <div className="three-box-list">
        <div className="under-three-box-list"><img src={imgg1} /></div>
        <div class="under-three-box-list"><img src={imgg2} /></div>
        <div class="under-three-box-list"><img src={imgg3} /></div>
      </div>
      <div class="three-link-menus">
        <a href="" class="first-link-active"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95 70"
          width="1.3571428571428572rem" height="1rem" class="brandhub-icon">
          <path
            d="M61 10.9H34.7v26.3H61V10.9zm22.9 0H66.6v4.3H84v-4.3zm0 10.6H66.6v4.3H84v-4.3zm0 10.5H66.6v4.3H84V32zm0 10.6H34.7v4.3h49.2v-4.3zm-56.2 0H11.4v4.3h16.4v-4.3zm0-11H11.4v4.3h16.4v-4.3z"
            fill="currentColor"></path>
          <path
            d="M23.8.2v20.9H.5v35.6C.5 63.2 6.3 70 14 70h68.7c7.1 0 12.2-6.8 12.2-13.2V.2H23.8zm-18 56.5V26.3l18-.1v30.5c0 3.4-2.6 7.8-9.6 7.8-4.3.1-8.4-3.7-8.4-7.8zm76.9 7.8H25.8c.5-.1 3.3-2.4 3.3-7.8V5.8h60v51c0 4.7-2.8 7.7-6.4 7.7z"
            fill="currentColor"></path>
        </svg>New</a>
        <a href="" class="second-link-active"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.264 57.368"
          width="1rem" height="1rem" class="brandhub-icon">
          <path
            d="M30.188 46.117L14.704 57.368 9.58 53.692l5.904-18.157L0 24.395l2.005-6.015h19.049L26.957 0h6.35l5.903 18.38h19.049l2.005 6.015-15.484 11.14 5.904 18.045-5.124 3.788z"
            fill="currentColor"></path>
        </svg>Popular</a>
        <a href="" class="third-link-active"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.106 30.21"
          width="0.7857142857142857rem" height="1rem" class="brandhub-icon">
          <path d="M24.106 15.052L0 30.21V0z" fill="currentColor"></path>
        </svg>Videos</a>
      </div>
    </>

  );


}

export default Three_Box;