import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getHistoryAPI } from "../services/allAPI";
import { removeHistoryAPI } from "../services/allAPI";

function History() {
  const [videoHistory, setVideoHistory] = useState([]);

  console.log(videoHistory);
  useEffect(() => {
    getAllHistory();
  }, []);

  const getAllHistory = async () => {
    try {
      const result = await getHistoryAPI();
      setVideoHistory(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleRemoveHistory = async (videoId) => {
    try {
      await removeHistoryAPI(videoId);
      getAllHistory();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between">
        <h3>Watch History</h3>
        <Link to={"/home"}>Back to home</Link>
      </div>
      <table className="table my-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Video Link</th>
            <th>Time Stamp</th>
            <th>
              <div className="fa-solid fa-ellipsis-vertical"></div>
            </th>
          </tr>
        </thead>
        <tbody>
          {videoHistory.length > 0 ? (
            videoHistory?.map((item, index) => (
              <tr key={item?.id}>
                <td>{index + 1}</td>
                <td>{item?.caption}</td>
                <td>
                  <a href={item?.youtubeURL} target="_blank">
                    {item?.youtubeURL}
                  </a>
                </td>
                <td>{item?.timeStamp}</td>
                <td>
                  <button
                    onClick={() => handleRemoveHistory(item?.id)}
                    className="fa-solid fa-trash text-danger"
                  ></button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-danger fw-bolder">
                Your Watch History is empty
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default History;
