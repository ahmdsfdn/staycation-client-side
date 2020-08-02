import React, { Component } from "react";
import { connect } from "react-redux"

import Fade from "react-reveal/Fade";
import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImages";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
// import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

// import ItemDetails from "json/itemDetails.json";

import { checkoutBooking } from 'store/action/checkout'
import { fetchPage } from 'store/action/page'
import Activities from "parts/Activities";

// export default 
class DetailPages extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
    
    if(!this.props.page[this.props.match.params.id])
    this.props.fetchPage(`/detail-page/${this.props.match.params.id}`, this.props.match.params.id )
  }

  render() {

    const { page, match } = this.props;
    
    if(!page[match.params.id]) return null;
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle breadcrumb={breadcrumb} data={page[match.params.id]} />
        <FeaturedImage data={page[match.params.id].imageId} />
        <section>
          <div className="container">
            <div className="row">
              <Fade bottom>
                <div className="col-7 pr-5">
                  <PageDetailDescription data={page[match.params.id]} />
                </div>
              </Fade>
              <Fade bottom>
                <div className="col-5">
                  <BookingForm itemDetails={page[match.params.id]} startBooking={this.props.checkoutBooking} />
                </div>
              </Fade>
            </div>
          </div>
        </section>
        <Activities data={page[match.params.id].activityId} />
        <Testimony data={page[match.params.id].testimonial} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
})

export default connect(mapStateToProps, { checkoutBooking, fetchPage })(DetailPages)