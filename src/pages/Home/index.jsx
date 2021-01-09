import { Container, Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import MovieItem from "../../components/MovieItem";
import { fetchMovie } from "../../redux/actions/movie";
import Pagination from "@material-ui/lab/Pagination";
import Header from "../../components/Header";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      pageSize: 6,
    };
  }
  handleChangePage = (event, page) => {
    console.log(page);
    this.props.dispatch(fetchMovie({ page, pageSize: this.state.pageSize }));
  };
  renderMovieList = () => {
    return this.props.movieList?.items.map((movie, index) => {
      return (
        <Grid item xs={12} lg={4} key={movie.maPhim}>
          <MovieItem movie={movie} />
        </Grid>
      );
    });
    // if(this.props.movieList){
    //       return this.props.movieList.map((movie, index) => {
    //         return (
    //           <Grid item xs={12} lg={4} key={index}>
    //             <MovieItem movie={movie}/>
    //           </Grid>
    //         );
    //       });
    //     }
  };
  render() {
    console.log();
    return (
      <div>
        <Header />
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            style={{textAlign:"center"}}
          >
            Movie List
          </Typography>
          <Grid container spacing={3}>
            {this.renderMovieList()}
          </Grid>
          <div
            style={{
              textAlign: "center",
              padding: "2rem",
              width: "28%",
              margin: "auto",
            }}
          >
            {this.props.movieList?.totalPages > 1 && (
              <Pagination
                count={this.props.movieList.totalPages}
                page={this.setState.page}
                color="secondary"
                onChange={this.handleChangePage}
              />
            )}
          </div>
        </Container>
      </div>
    );
  }
  componentDidMount() {
    // chay sau render
    // call api ngay day
    this.props.dispatch(fetchMovie(this.state));
  }
}
const mapStateToProps = (state) => {
  return {
    movieList: state.movieReducer.movieList,
  };
};
export default connect(mapStateToProps)(Home);
