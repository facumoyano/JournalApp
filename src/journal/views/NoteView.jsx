import React from "react";
import { Grid, Typography, Button, TextField } from "@mui/material";
import { SaveOutlined } from "@mui/icons-material";
import ImageGallery from "../components/ImageGallery";

const NoteView = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 1 }}
            className="animate__animated animate__fadeIn animate__faster"
        >
            <Grid item>
                <Typography fontSize={39} fontWeight="light">
                    28 agosto, 2022
                </Typography>
            </Grid>
            <Grid item>
                <Button color="primary" sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un título"
                    label="Título"
                    sx={{ border: "none", mb: 1 }}
                />
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="Escribe lo que quieras."
                    minRows={5}
                />
            </Grid>
            <ImageGallery />
        </Grid>
    );
};

export default NoteView;
