import express from "express";
import { getAllUsers } from "../controllers/user.controller";

// router.post('/users', UserController.create);
// router.get('/users', UserController.findAll);
// router.get('/users/:id', UserController.findOne);
// router.put('/users/:id', UserController.update);
// router.delete('/users/:id', UserController.delete);

export default (router: express.Router) => {
  router.get("/users", getAllUsers);
  // router.delete('/users/:id', isAuthenticated, isOwner, deleteUser);
  // router.patch('/users/:id', isAuthenticated, isOwner, updateUser);
};
