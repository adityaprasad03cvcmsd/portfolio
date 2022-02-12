import "./Project.css";
import "../App.css"
import Project1 from '../images/faasos.png';
import Project2 from '../images/healthmug.png';
import Project3 from '../images/recipe.png';
import Project4 from '../images/news.png';
import Project5 from '../images/weather.png';

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading projectText">PROJECTS</h1>
        <p className="heading p__color">
          These contain both colaborative and solo projects as well.
        </p>        
      </div>
       <div className="container">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Faasos Clone</h5>
                     <h4 className="project__text">Faasos is an Indian "food on demand" service app</h4>
                     <a href="https://github.com/gopimudumal99/faasos-masai-clone" target="_blank" className="project__btn">View Details</a>
                     <a href="https://faasos-masai-clone.herokuapp.com/" target="_blank" className="project__btn">Deployed</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">HealthMug Clone</h5>
                     <h4 className="project__text">An E-commerce website for medicens and medical equipments.</h4>
                     <a href="https://github.com/Akshay-Kumar2000/HealthMug-Clone" target="_blank" className="project__btn">View Details</a>
                     <a href="#" className="project__btn">Deployed</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Food Recipe</h5>
                     <h4 className="project__text">Food recipes of dishes of several cuisines.</h4>
                     <a href="https://github.com/adityaprasad03cvcmsd/food-recipe-app.git" className="project__btn" target={"_blank"}>View Details</a>
                     <a href="https://foodrecipemasaiadityaprasad.netlify.app/" className="project__btn" target={"_blank"}>Deployed</a>                     
                     </div>                     
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">News App</h5>
                     <h4 className="project__text">Geting the latest news and of any desired topic</h4>
                     <a href="https://github.com/adityaprasad03cvcmsd/news-app" className="project__btn" target={"_blank"}>View Details</a> 
                     <a href="#" className="project__btn" target={"_blank"}>Deployed</a>         
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project5} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Weather App</h5>
                     <h4 className="project__text">weather forecast of any place or region</h4>
                     <a href="https://github.com/adityaprasad03cvcmsd/Weather-forceasting-app" className="project__btn" target={"_blank"}>View Details</a>  
                     <a href="#" className="project__btn" target={"_blank"}>Deployed</a>        
                     </div>
                 </div>
             </div>             
           </div>
       </div>
    </div>
  );
}

export default Project;
