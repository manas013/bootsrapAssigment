import React, { useEffect, useState } from 'react'
import './body.css';

function Body() {
    const[count,setCount]=useState(345);
    const[mind,setmind]=useState(1045);
    useEffect(()=>{
        const interval=setInterval(() => {
            
          
                setCount((count)=>count+1)     
        },10000);
        const vi=setInterval(() => {
            
          
            setmind((mind)=>mind+1)     
    },10000);

    },[])
  return (
    <div>
        <section id='home'>
            <div class='container-fluid px-0 top-banner'>
                <div class='container'>
                    <div class='col-lg-5 col-md-6'>
                        <h1>Good food Choice are good investment.</h1>
                        <p>Lorem impulse sit amet, consector adipiscing elit. etiam at purus a odio finibus bibendum amet leo</p>
                        <div class='mt-4'>
                            {/* <button class='main-btn'>order now <i class="bi bi-cart-check-fill"></i></button> */}
                            <button type="button" class="main-btn" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?" aria-describedby="popover676069">order now<i class="bi bi-cart-check-fill"></i></button>
                            <button class='white-btn ms-lg-4 mt-lg-0 mt-4'>Purches<i class="bi bi-bag-plus-fill"></i></button>

                        </div>

                    </div>

                </div>
            </div>

        </section>

        <section id='counter'>
            <section class='counter-section'>
                <div class="container">
                    <div class='row text-center'>
                        <div class="col-md-3 mb-lg-0 mb-md-0 mb-5">
                            <h2>
                                <span id='count1'>1287+</span>
                            </h2>
                            <p>SAVINGS</p>
            

                        </div>
                        <div class="col-md-3 mb-lg-0 mb-md-0 mb-5">
                            <h2>
                                <span id='count2'>{count}</span>
                            </h2>
                            <p>PHOTOS</p>

                        </div>
                        <div class="col-md-3 mb-lg-0 mb-md-0 mb-5">
                            <h2>
                                <span id='count3'>1440+</span>
                            </h2>
                            <p>ROCKET</p>

                        </div>
                        <div class="col-md-3 mb-lg-0 mb-md-0 mb-5">
                            <h2>
                                <span id='count4'>{mind}</span>
                            </h2>
                            <p>Globes</p>

                        </div>

                    </div>

                </div>

            </section>

        </section>
      <section id='about'>
        <div class='about-section wrapper'>
            <div class='container'>
                <div class='row align-items-center'>
                    <div class='col-lg-7 col-md-12 mb-lg-0 mb-5'>
                        <div class='card border-0'>
                            <img src='images/img/img-1.png' alt='jncdnk' class='img-fluid'/>
                        </div>
                    </div>
                    <div class='col-lg-5 col-md-12 text-sec'>
                        <h2>we pride ourselve on making real food from the best ingredeints</h2>
                        <p>
                        A portion of their fiber comes from insoluble and soluble fibers called pectin. Soluble fiber is associated ,gfghghvfjncgtdfbcbn .
                        <button class='main-btn mt-4'>LEARN MORE</button>
                        </p>

                    </div>

                </div>

            </div>
            <div class='container food-type'>
                <div class='row align-items-center'>
                    <div class='col-lg-5 col-md-12 text-sec mb-lg-0 mb-5'>
                        <h2>We make everything bu hand with the best possible ingredients</h2>
                        <p>Vitamin C. Also called ascorbic acid, this vitamin is a common antioxidant in fruits. It’s an essential dietary nutrient that has many important functions in your body (12Trusted Source).</p>

                        <button class='main-btn mt-4'>LEARN MORE</button>
                    </div>
                    <div class='col-lg-7 col-md-12'>
                        <div class='card border-0'>
                            <img src='images/img/img-2.png' alt='hello' class='img-fluid'/>

                        </div>

                    </div>

                </div>

            </div>

        </div>

      </section>
      <section id='story'>
        <div class='story-section'>
            <div class='container'>
                <div class='row'>
                    <div class='col-sm-12'>
                        <div class='text-content'>
                            <h2>when a mans stomach is full it makes no differents whether he is rich or poor</h2>
                            <p>
                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form .
                            </p>
                            <button class='main-btn mt-3'>Read More</button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

      </section>
      <section id='explorer-food'>
        <div class='explore-food wrapper'>
            <div class='container'>
                <div class='row'>
                    <div class='col-sm-12'>
                        <div class='text-content text-center'>
                            <h2>Explore our food</h2>
                            <p>
                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content
                            </p>
                        </div>

                    </div>

                </div>
                <div class='row pt-5'>
                    <div class='col-lg-4 col-md-6 mb-lg-0 mb-5'>
                        <div class='card'>
                            <img src='images/img/img-3.jpg' alt='op' class='img-fluid'/>
                            <div class='pt-3'>
                                <h4>veg sandwich</h4>
                                <p>Time: 20-30 Minute | Server: 1</p>
                                <span>$6.20<del>$8.50</del></span>
                                <button class='mt-4 main-btn'>Order Now</button>
                          </div>

                        </div>

                    </div>
                    <div class='col-lg-4 col-md-6 mb-lg-0 mb-5'>
                        <div class='card'>
                            <img src='images/img/img-4.jpg' alt='EA sport' class='img-fluid'/>
                            <div class='pt-3'>
                                <h4>Vegetarian Burger</h4>
                                <p>Time: 30-45 Minute | Server: 1</p>
                                <span>$9.20<del>$10.50</del></span>
                                <button class='mt-4 main-btn'>Order Now</button>
                          </div>

                        </div>

                    </div>
                    <div class='col-lg-4 col-md-6 mb-lg-0 mb-5'>
                        <div class='card'>
                            <img src='images/img/img-5.jpg' alt='java' class='img-fluid'/>
                            <div class='pt-3'>
                                <h4>strawberry sandwich</h4>
                                <p>Time: 40-50 Minute | Server: 1</p>
                                <span>$11.20<del>$19.50</del></span>
                                <button class='mt-4 main-btn'>Order Now</button>
                          </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

      </section>
      <section id='testimonial'>
        <div class='wtapper testimonial-section'>
            <div class='container text-center'>
                <div class='text-center pb-4'>
                    <h2>testimonial</h2>
                </div>
                <div class='row'>
                    <div class='col-sm-12 col-lg-10 offset-lg-1'>
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
        <div class='carousel-caption'>
        <img src="images/review/review-1.jpg"  alt="..."/>
      <p>"far away behimnd yje the scene is truely beautiful valorant is important game in life"</p>
      <h5>Raze</h5>
        </div>
    </div>
    <div class="carousel-item">
    <div class='carousel-caption'>
        <img src="images/review/review-2.jpg"  alt="..."/>
      <p>"far away behimnd yje the scene is truely beautiful valorant is important game in life"</p>
      <h5>Jett</h5>
        </div>
    </div>
    <div class="carousel-item">
    <div class='carousel-caption'>
        <img src="images/review/review-1.jpg" alt="..."/>
      <p>"far away behimnd yje the scene is truely beautiful valorant is important game in life"</p>
      <h5>Sova</h5>
        </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

                    </div>

                </div>

            </div>
        </div>

      </section>
      <section id='faq'>
        <div class='faq wrapper'>
            <div class='container'>
                <div class='row'>
                    <div class='col-sm-12'>
                        <div class='text-center pb-4'>
                            <h2>Frequently Asked Question</h2>
                        </div>

                    </div>

                </div>
                <div class='row pt-5'>
                    <div class='col-sm-6 mb-4'>
                        <h4><span>~</span>IS Foodies Bread really bajed fresh each day</h4>
                        <p>
                        Bread is a staple food prepared from a dough of flour and water, usually by baking. Throughout recorded history and around the world, it has been an important part of many cultures' diet
                        </p>

                    </div>
                    <div class='col-sm-6 mb-4'>
                        <h4><span>~</span>IS Foodies Bread really bajed fresh each day</h4>
                        <p>
                        Bread is a staple food prepared from a dough of flour and water, usually by baking. Throughout recorded history and around the world, it has been an important part of many cultures' diet
                        </p>

                    </div>
                    <div class='col-sm-6 mb-4'>
                        <h4><span>~</span>IS Foodies Bread really bajed fresh each day</h4>
                        <p>
                        Bread is a staple food prepared from a dough of flour and water, usually by baking. Throughout recorded history and around the world, it has been an important part of many cultures' diet
                        </p>

                    </div>
                    <div class='col-sm-6 mb-4'>
                        <h4><span>~</span>IS Foodies Bread really bajed fresh each day</h4>
                        <p>
                        Bread is a staple food prepared from a dough of flour and water, usually by baking. Throughout recorded history and around the world, it has been an important part of many cultures' diet
                        </p>

                    </div>

                </div>

            </div>

        </div>

      </section>
      <section id='newslettar'>
        <div class='newslettar wrapper'>
            <div class='container'>
                <div class='row'>
                    <div class='sol-sm-12'>
                        <div class='text-content text-center pb4'>
                            <h2>Hurry up! 25% off limited time</h2>
                            <p>Limited time offer for this month.no credut card require</p>
                        </div>
                        <form class='newsletter'>
                            <div class='row'>
                                <div class='col-md-8 col-12'>
                                    <input className='form-control' placeholder='email address ' name='email'type='email'/>
                                </div>
                                <div class='col-md-4 col-12'>
                                   <button class='main-btn'>Subscribe</button>
                                </div>


                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </div>

      </section>
      <footer id='footer'>
        <div class='footer py-5'>
            <div class='container'>
                <div class='row'>
                    <div class='col-md-12 text-center'>
                        <a class='footer-link' >Register</a>
                        <a class='footer-link' >Forum</a>
                        <a class='footer-link' >Affiliate</a>
                        <a class='footer-link'>FAQ</a>
                    </div>
                    <div class='footer-social pt-4 text-center'>
                        <a ><i class="bi bi-facebook"></i></a>
                        <a ><i class="bi bi-twitter"></i></a>
                        <a ><i class="bi bi-youtube"></i></a>
                        <a ><i class="bi bi-dribbble"></i></a>
                        <a><i class="bi bi-linkedin"></i></a>
                        <a ><i class="bi bi-instagram"></i></a>

                    </div>

                </div>
                <div class='col-sm-12'>
                    <div class='footer-copy'>
                        <div class='copy-right text-center pt-5'>
                            <p class='text-light'>@ 2021. Foodies. All right</p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

      </footer>

    </div>
  )
}

export default Body
