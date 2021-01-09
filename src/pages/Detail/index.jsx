import {
  ButtonBase,
  Grid,
  Link,
  Paper,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovieDetail } from "../../redux/actions/movie";
import theme from "../../theme";
import Layout from "../../HOCs/layout";

const styles = {
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
};

const preventDefault = (event) => event.preventDefault();

class Detail extends Component {
  render() {
    const { movieDetail, classes } = this.props;
    return (
      <Layout className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid style={{width:"100%"}} item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="Image"
                  src={movieDetail?.hinhAnh}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {movieDetail?.tenPhim}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Mô tả: {movieDetail?.moTa}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Ngày khởi chiếu: {movieDetail?.ngayKhoiChieu}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    Trailer:{" "}
                    <Link href={movieDetail?.trailer} onClick={preventDefault}>
                      {movieDetail?.trailer}
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  Đánh giá: {movieDetail?.danhGia}/10
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Layout>
    );
  }
  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    this.props.dispatch(fetchMovieDetail(movieId));
  }
}
const mapStateToProps = (state) => {
  return {
    movieDetail: state.movieReducer.movieDetail,
  };
};
export default connect(mapStateToProps)(withStyles(styles)(Detail));
