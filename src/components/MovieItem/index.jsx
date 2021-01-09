import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import styles from "./style";
import DetailsIcon from "@material-ui/icons/Details";
import { withRouter } from "react-router-dom";

class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }
  getDetail = () => {
    this.props.history.push("/detail/" + `${this.props.movie.maPhim}`);
  };

  handleExpandClick = () => {
    this.setState((state) => ({
      ...state.expanded,
      expanded: !this.state.expanded,
    }));
  };
  preventDefault = (event) => event.preventDefault();
  render() {
    const { movie } = this.props;
    // console.log(this.state.expanded);
    const { root, media } = this.props.classes;
    return (
      <Container maxWidth="lg">
        <Card className={root}>
          <CardMedia
            className={media}
            image={movie?.hinhAnh}
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {movie?.tenPhim}
            </Typography>
            <Typography paragraph>Ngày chiếu: {movie?.ngayKhoiChieu}</Typography>
            <Typography paragraph>Đánh giá: {movie?.danhGia}/10</Typography>
          </CardContent>
          <CardActions disableSpacing>
            {/* <Tooltip title="Like">
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            </Tooltip> */}
            <Button
              variant="contained"
              color="primary"
              startIcon={<DetailsIcon />}
              fullWidth="true"
              onClick={this.getDetail}
            >
              Chi tiết
            </Button>
            {/* <Tooltip title="Show more">
              <IconButton
                className={clsx(expand, {
                  [expandOpen]: this.state.expanded,
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </Tooltip> */}
          </CardActions>
          {/* <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Mô tả: {movie.moTa}</Typography>
              <Typography style={{ wordWrap: "break-word" }} paragraph>
                Trailer:{" "}
                <Link href={movie.trailer} onClick={this.preventDefault}>
                  {movie.trailer}
                </Link>{" "}
              </Typography>
            </CardContent>
          </Collapse> */}
        </Card>
      </Container>
    );
  }
}

export default withRouter(withStyles(styles)(MovieItem));
