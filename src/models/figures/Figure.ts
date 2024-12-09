import { Colors } from "../Colors";
import logo from "../../assets/black-king.png";
import { Cell } from "../Cell";

export enum FiguresName {
  "FIGURE" = "Фигура",
  "KING" = "Король",
  "QUEEN" = "Королева",
  "KNIGHT" = "Конь",
  "PAWN" = "Пешка",
  "ROOK" = "Ладья",
  "BISHOP" = "Слон",
}

export class Figure {
  color: Colors;
  logo: typeof logo | null;
  cell: Cell;
  name: FiguresName;
  id: number;

  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null;
    this.name = FiguresName.FIGURE;
    this.id = Math.random();
  }

  canMove(target: Cell): boolean {
    if (target.figure?.color === this.color) {
      return false;
    }
    if (target.figure?.name === FiguresName.KING) {
      return false;
    }
    return true;
  }

  moveFigure(target: Cell) {}
}
