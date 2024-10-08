"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const company_controller_1 = __importDefault(require("./company.controller"));
const router = (0, express_1.Router)();
router.post("/", company_controller_1.default.createCompany);
router.patch("/:id", company_controller_1.default.updateCompany);
module.exports = router;
