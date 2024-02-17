import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import loader from "../assets/loader.gif";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SetAvatarRoute } from "../utils/APIroutes";

export default function SetAvatar() {
    const api = "https://api.multiavatar.com/45678945";
    const navigate = useNavigate();
    const [avatar, setAvatar] = useState([]);
    const [loading, setLoading] = useState(true);
    const[selectedAvatar, setSelectedAvatar] = useState(undefined);
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      };
  return (
    <>
    <Container>
        <div className="title-container">
            <h1>Pick an avatar as your profile picture</h1>
        </div>
        <div className="avatars"></div>
    </Container>
    <ToastContainer/>
    </>
  )
}

const container = styled.div``;
