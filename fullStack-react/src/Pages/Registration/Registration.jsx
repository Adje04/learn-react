import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


export default function Registration() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

 
  const onSubmit = (data) => {
    if (data.confirmPassword.trim() !== data.password.trim()) {
      toast.error("les mots de passe ne correspondent pas");
    } else {
      axios.get(`http://localhost:3000/users?email=${data.email}`)
        .then(function (response) {
          if (response.data.length > 0) {
            toast.error("cet email est déjà utilisé");
          } else {
            axios.post("http://localhost:3000/users", data)
              .then(function (response) {
                console.log(response);
                toast.success("inscription réussie");
                navigate("/login");
              })
              .catch(function (error) {
                console.log(error);
                toast.error("une erreur est survenue");
              });
          }
        })
        .catch(function (error) {
          console.log(error);
          toast.error("une erreur est survenue lors de la vérification de l'email");
        });
    }
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
        <Typography variant='h4'>Inscription</Typography>
        <form onSubmit={handleSubmit(onSubmit)} action="" method="post">

          <Stack direction={"column"} gap={2}>

            <TextField
              id="username"
              label="veuillez saisir votre nom"
              variant="outlined"
              fullWidth
              size='small'
              {...register("username", {
                required: "Veuillez entrer votre nom",
                minLength: {
                  value: 2,
                  message: "le nom doit etre compris entre 2 et 32 caractères"
                },
                maxLength: {
                  value: 32,
                  message: "le nom doit etre compris entre 2 et 32 caractères"
                },
              })}
            />
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

            <TextField
              type='password'
              id="confirmPassword"
              label="veuillez confirmer votre mot de passe"
              variant="outlined"
              fullWidth
              size='small'
              {...register("confirmPassword", {
                required: "Confirmer votre mot de passe",
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
            }}>S'inscrire</Button>

        </form>
      </Box>

    </Stack>
  )
}
