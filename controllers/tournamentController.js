const tournamentService = require('../services/tournamentService');

const getAllTournaments = async (req, res, next) => {
  try {
    const tournaments = await tournamentService.getAll();
    res.send(tournaments);
  } catch (e) {
    next(e);
  }
};

const getTournament = async (req, res, next) => {
  try {
    const tournament = await tournamentService.getById(req.params.id);
    res.send(tournament);
  } catch (e) {
    next(e);
  }
};

const addTournament = async (req, res, next) => {
  try {
    const tournament = await tournamentService.add(req.body);
    res.status(201).send(tournament);
  } catch (e) {
    next(e);
  }
};
const editTournament = async (req, res, next) => {
  try {
    const ModifiedTournament = await tournamentService.update(
      req.params.id,
      req.body
    );
    res.send(ModifiedTournament);
  } catch (e) {
    next(e);
  }
};

const deleteTournament = async (req, res, next) => {
  try {
    await tournamentService.deleteOne(req.params.id);
    res.sendStatus(204);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAllTournaments,
  getTournament,
  addTournament,
  editTournament,
  deleteTournament,
};
