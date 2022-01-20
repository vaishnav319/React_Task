import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { _ } from "lodash";
import Display from "./Display";

const Order = ({ albums: { albums }, photos: { photos } }) => {
  console.log(albums);
  console.log(photos);
  if (photos && albums) {
    function checkifvalid(id, listofids) {
      for (var i = 0; i < listofids.length; i++) {
        if (id == listofids[i]) {
          return true;
        }
      }
    }
    var filt = albums.filter((album) => album.id <= 5);
    console.log(filt);

    var idreq = [1, 2, 3, 4, 5];

    // filt.forEach((album) => {
    //   idreq.push(_.pick(album, ["id"]).id);
    // });
    console.log(idreq);

    photos.filter((album) => checkifvalid(album.albumId, idreq));

    var dict = {};
    for (var i = 0; i < idreq.length; i++) {
      dict[idreq[i]] = [];
    }

    photos.forEach((album) => {
      if (
        String(album.albumId) in dict &&
        dict[String(album.albumId)].length < 10
      ) {
        dict[String(album.albumId)].push(album);
      }
    });
    console.log(dict["5"]);
  }
  return (
    <>
      {/* {filt.map((num1, index) => {
        var i = 1;
        var num2 = dict[i];
        console.log(num1, num2);
        i++;
      })} */}
      {filt &&
        filt.map((fil, index) => (
          <div>
            <h3>{fil.title}</h3>
            {dict[index + 1].map((photo) => (
              <Display style={{ height: "50%" }} photo={photo} />
            ))}
          </div>
        ))}
    </>
  );
};

Order.propTypes = {
  albums: PropTypes.object.isRequired,
  photos: PropTypes.object.isRequired,
};

const mapStateProps = (state) => ({
  albums: state.albums,
  photos: state.photos,
});

export default connect(mapStateProps, {})(Order);
