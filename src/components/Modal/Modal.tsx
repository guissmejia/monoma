import * as React from 'react';

import Avatar from '@mui/material/Avatar';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { ModalProps } from '../../models/Modal';
import { Moves, Abilities, Types } from '../../models/PokemonData';

const ModalElement = ({ open, setOpen, character, name, image }: ModalProps) => {
  const { id, abilities, base_experience, weight, moves, types, species, height, sprites: { front_default } } = character

  const handleClose = () => setOpen(false);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition={false}
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={styles.Box}>
          <Grid item key={id} sx={styles.Grid}>
            <Box sx={styles.AvatarContainer}>
              <Avatar alt="Character Icon" src={image} sx={styles.Avatar} />
            </Box>
            <Box sx={styles.Content}>
              <Box sx={styles.ContentContainer}>
                <Typography id="transition-modal-title" variant="h6" component="h2" sx={styles.Title}>
                  {name}
                </Typography>
                <Typography component="p" sx={styles.PropName}>
                  Id:<Typography component="span">{id}</Typography>
                </Typography>
                <Typography component="p" sx={styles.PropName}>
                  Weight: <Typography component="span">{weight} kg</Typography>
                </Typography>
                <Typography component="p" sx={styles.PropName}>
                  Height: <Typography component="span">{height} mts</Typography>
                </Typography>
                <Typography component="p" sx={styles.PropName}>
                  Base experience: <Typography component="span">{base_experience}</Typography>
                </Typography>
                <Typography component="p" sx={styles.PropName}>
                  Specie: <Typography component="span">{species.name}</Typography>
                </Typography>
                <Typography component="p" sx={styles.PropName}>
                  Abilities: {abilities.map((ability: Abilities, idx: number) => (
                    <Typography component="span" key={`${name}-${ability.ability.name}-${idx}`}>
                      {`${ability.ability.name} `}
                    </Typography>
                  ))}
                </Typography>
                <Typography component="p" sx={styles.PropName}>
                  Moves: {moves.slice(0, 6).map((move: Moves, idx: number) => (
                    <Typography component="span" key={`${name}-${move.move.name}-${idx}`}>
                      {`#${move.move.name} `}
                    </Typography>
                  ))}
                </Typography>
                <Typography component="p" sx={styles.PropName}>
                  Types: {types.map((type: Types, idx: number) => (
                    <Typography component="span" key={`${name}-${type.type.name}-${idx}`}>
                      {`${type.type.name} `}
                    </Typography>
                  ))}
                </Typography>
              </Box>
              <Box>
                <Avatar alt="Small Character Icon" src={front_default} sx={styles.MiniAvatar} />
              </Box>
            </Box>
          </Grid>
        </Box>
      </Fade>
    </Modal>
  );
}

const styles = {
  Box: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '65%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    border: 'none',
    borderRadius: '8px',
    outline: '0',
  },
  AvatarContainer: {
    width: '50%',
    height: '100%',
  },
  MiniAvatar: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    borderRadius: 'initial',
    'img': {
      width: 'auto',
      height: 'auto',
    }
  },
  Avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 'initial',
    padding: '1.5em',
    boxSizing: 'border-box',
    'img': {
      width: '400px',
      height: '100%',
      filter: 'drop-shadow( -20px 5px 10px #000 )'
    }
  },
  Title: {
    fontSize: '35px'
  },
  PropName: {
    fontWeight: '400',
    margin: '7px 0',
    fontSize: '18px',
    'span': {
      fontWeight: '300',
      fontSize: '18px',
    }
  },
  Grid: {
    display: 'flex'
  },
  Content: {
    width: '50%',
    height: '100%',
    margin: '0',
    padding: '1em 1em 1em 0',
    boxSizing: 'border-box',
  },
  ContentContainer: {

  }
};

export default ModalElement