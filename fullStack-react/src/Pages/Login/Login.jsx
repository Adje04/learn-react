
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'


export default function Login() {
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("users")) {
      navigate("/")
    }
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()



  const onSubmit = (data) => {

    axios.get(`http://localhost:3000/users?email=${data.email}&password=${data.password}`)
      .then((response) => {
        if (response.data.length > 0) {
          console.log(response);
          localStorage.setItem("users", JSON.stringify(response.data[0]));
          toast.success("connexion réussie");
          navigate("/");
        } else {
          toast.error("vos identifiants de connexions sont incorrectes");
        }
      })


  };



  return (
    <Stack alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      height={"100vh"}
      backgroundColor={"white"}>
      <Box width={" 30vw"}
        sx={{
          backgroundColor: "white",
          padding: 3,
          border: 1
        }}
      >
        <Typography variant='h4'>Connexion</Typography>
        <form onSubmit={handleSubmit(onSubmit)} action="" method="post">

          <Stack direction={"column"} gap={2}>

            <TextField
              type='email'
              id="email"
              label="veuillez saisir votre email"
              variant="outlined"
              fullWidth
              size='small'
              {...register("email", {
                required: "Veuillez entrer votre email",
                minLength: {
                  value: 2,
                  message: "le nom doit etre compris entre 2 et 32 caractères"
                },
                maxLength: {
                  value: 32,
                  message: "le nom doit etre compris entre 2 et 32 caractères"
                },
                pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              })}
            />

            <TextField
              type='password'
              id="password"
              label="veuillez saisir un mot de passe"
              variant="outlined"
              fullWidth
              size='small'
              {...register("password", {
                required: "Veuillez saisir un mot de passe",
                minLength: {
                  value: 6,
                  message: "le mot de passe doit etre au moins de 6caractères"
                },
              })}
            />

          </Stack>

          <Button
            type='submit'
            variant="contained"
            fullWidth
            sx={{
              marginTop: 4,
              backgroundColor: "black"
            }}>Se connecter</Button>
          <Typography sx={
            {
              paddingTop: 1
            }
          } >déjà un compte ?
            <Link to={'/registration'} >S'inscrire</Link>
          </Typography>
        </form>
      </Box>

    </Stack>
  )
}






