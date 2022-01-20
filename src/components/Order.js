import React from "react";
import { _ } from "lodash";
const Order = ({ albums, photos }) => {
  if (albums && photos) {
    function checkifvalid(id, listofids) {
      for (var i = 0; i < listofids.length; i++) {
        if (id == listofids[i]) {
          return true;
        }
      }
    }
    var filt = albums.filter((album) => album.id < 5);
    console.log(filt);

    var idreq = [];

    var filtalbum = photos.filter((album) => album.id);

    filt.forEach((album) => {
      idreq.push(_.pick(album, ["id"]).id);
    });
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
    console.log(dict["1"]);
  }
  return <div></div>;
};

export default Order;
