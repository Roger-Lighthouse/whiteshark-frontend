import React from 'react';
import img_W1 from '../images/W1.jpg'
import img_W2 from '../images/w2.jpg'
import img_W3 from '../images/w3.jpg'
import img_W4 from '../images/w4.jpg'
import Eaves from '../images/eaves.jpg'
import oddJobs from '../images/oddJobs.jpg'
import lawnCare from '../images/lawnCare.jpg'
import ExtraMilePainting from '../images/extraMilePainting.jpg'
import BookJobModal from './BookJobModal'
import BookPaintingModal from './BookPaintingModal'
import BookEavesModal from './BookEavesModal'
import BookOddJobModal from './BookOddJobModal'
import VideoModal from './videoModal'
import { Image } from 'react-bootstrap'

const Products = (props) => (
  <div>
    {console.log('products444', props.w2)}
    <div id="productsContainer">
      <div className="row">
        <div>
          <VideoModal block/>
        </div>

        <div className="col-md-12">
          <div className="row">
          {/* <WindowJobs /> */}

          <div className="col-sm-4 col-lg-3 col-md-4">
            <div className="thumbnail">
              <div className="productImg">
                <Image src={img_W1} rounded></Image>
              </div>
              <div className="caption">
                <h4>
                  Exterior only [W1]
                </h4>
                <h2 className="pull-right">
                  {/* <Currency symbol="$" value={ props.client.current_w1 * 100} /> */}
                </h2>
                <p>No removal of window, storm or screen. Remove loose dirt and water from sills.</p>
              </div>
              <BookJobModal
                jobTitle="Exterior only [W1]"
                jobDesc="No removal of window, storm or screen. Remove loose dirt and water from sills."
                jobType="W1"
                price={ props.w1 ? props.w1 : "TBD" }/>
            </div>
          </div>

          <div className="col-sm-4 col-lg-3 col-md-4">
            <div className="thumbnail">
              <div className="productImg">
                <Image src={img_W2} rounded></Image>
              </div>
              <div className="caption">
                <h4>
                  Two-sided job [W2]
                </h4>
                <h2 className="pull-right">
                  {/* <Currency symbol="$" value={ props.client.current_w1 * 100} /> */}
                </h2>
                <p>Interior and exterior of window or storm. No removal of window, storm or screen. Remove loose dirt and water from sills.</p>
              </div>
              <BookJobModal
                jobTitle="Two-sided job [W2]"
                jobDesc="Interior and exterior of window or storm. No removal of window, storm or screen. Remove loose dirt and water from sills."
                jobType="W2"
                price={props.w2 ? props.w2 : "TBD"}/>
            </div>
          </div>

          <div className="col-sm-4 col-lg-3 col-md-4">
            <div className="thumbnail">
              <div className="productImg">
                <Image src={img_W3} rounded></Image>
              </div>
              <div className="caption">
                <h4>
                  Three sided job [W3]
                </h4>
                <h2 className="pull-right">
                  {/* <Currency symbol="$" value={ props.client.current_w1 * 100} /> */}
                </h2>
                <p>Brush screens to remove loose dirt. Remove storm, clean both sides. Clean exterior window. Replace storm. Remove loose dirt and water form sills.</p>
              </div>
              <BookJobModal
                jobTitle="Three sided job [W3]"
                jobDesc="Brush screens to remove loose dirt. Remove storm, clean both sides. Clean exterior window. Replace storm. Remove loose dirt and water form sills."
                jobType="W3"
                price="TBD"/>
            </div>
          </div>

            <div className="col-sm-4 col-lg-3 col-md-4">
              <div className="thumbnail">
                <div className="productImg">
                  <Image src={img_W4} rounded></Image>
                </div>
                <div className="caption">
                  <h4>
                    Four sided job [W4]
                  </h4>
                  <h2 className="pull-right">
                    {/* <Currency symbol="$" value={ props.client.current_w1 * 100} /> */}
                  </h2>
                  <p>Remove storm, clean both sides. Clean both sides of window. Brush screens to remove loose dirt. Replace storm. Remove loose dirt and water from sills.</p>
                </div>
                <BookJobModal
                  jobTitle="Four sided job [W4]"
                  jobDesc="Remove storm, clean both sides. Clean both sides of window. Brush screens to remove loose dirt. Replace storm. Remove loose dirt and water from sills."
                  jobType="W4"
                  price="TBD"
                />
              </div>
            </div>

            <div className="col-sm-4 col-lg-3 col-md-4">
              <div className="thumbnail">
                <div className="productImg">
                  <Image src={Eaves} rounded></Image>
                </div>
                <div className="caption">
                  <h4>
                    Eavestrough Cleaning
                  </h4>
                  <h2 className="pull-right">
                    {/* <Currency symbol="$" value={ props.client.current_w1 * 100} /> */}
                  </h2>
                  <p>We clean thousands of eavestroughs every year.</p>
                </div>
                <BookEavesModal price={props.eh}/>
              </div>
            </div>

            <div className="col-sm-4 col-lg-3 col-md-4">
              <div className="thumbnail">
                <div className="productImg">
                  <Image src={ExtraMilePainting} rounded></Image>
                </div>
                <div className="caption">
                  <h4>
                    Extra Mile Painting
                  </h4>
                  <h2 className="pull-right">
                    {/* <Currency symbol="$" value={ props.client.current_w1 * 100} /> */}
                  </h2>
                  <p>The crews are comprised of full time painters who have years of experience in residential homes. We have painted over 2,500 homes in the Greater Toronto Area.</p>
                </div>
                <BookPaintingModal/>
              </div>
            </div>

            <div className="col-sm-4 col-lg-3 col-md-4">
              <div className="thumbnail">
                <div className="productImg">
                  <Image src={oddJobs} rounded></Image>
                </div>
                <div className="caption">
                  <h4>
                    Odd Jobs
                  </h4>
                  <h2 className="pull-right">
                    {/* <Currency symbol="$" value={ props.client.current_w1 * 100} /> */}
                  </h2>
                  <p>
                    Need an odd job done by our more than competent workers? Not a problem, over 25 years WhiteShark has been catering to the odd jobs that our valued clients ask for.
                  </p>
                </div>
                <BookOddJobModal
                  jobTitle="Book an odd job"
                  jobDesc="Our crews are more than happy to assist you with whatever odd job you need help with."
                  textAreaTitle="Odd job details"
                  placeholder="i.e. brief description of the job"
                />
              </div>
            </div>

            <div className="col-sm-4 col-lg-3 col-md-4">
              <div className="thumbnail">
                <div className="productImg">
                  <Image src={lawnCare} rounded></Image>
                </div>
                <div className="caption">
                  <h4>
                    Lawn Care
                  </h4>
                  <h2 className="pull-right">
                    {/* <Currency symbol="$" value={ props.client.current_w1 * 100} /> */}
                  </h2>
                  <p>
                    Our lawn care service is designed to encourage thick, healthy, green lawns using industry leading equipment.
                  </p>
                </div>
                <BookOddJobModal
                  jobTitle="Book a lawn care appointment"
                  jobDesc="Get a fresh cut for your lawn today!"
                  textAreaTitle="Additional lawn care details"
                  placeholder=""
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Products;
