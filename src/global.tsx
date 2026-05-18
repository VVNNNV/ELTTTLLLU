import { makeAutoObservable } from "mobx";
import { normalize } from "./functions";
import { history } from "./router";
import { LocaleData } from "./type";
import { Initial } from "./Initial";

export type ThemeType = 'light' | 'dark';

export class GlobalState {
  public pathname: string = normalize(history.location.pathname);
  public page: null | React.ReactNode = (<Initial />);
  public lang: string = "en-US";
  public locale: LocaleData | null = null;
  public loading: boolean = false;
  public theme: ThemeType = (localStorage.getItem('theme') as ThemeType) || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  constructor() {
    makeAutoObservable(this);
    this.applyTheme();
  }

  public setTheme(theme: ThemeType) {
    this.theme = theme;
    localStorage.setItem('theme', theme);
    this.applyTheme();
  }

  private applyTheme() {
    document.documentElement.setAttribute('data-theme', this.theme);
  }
}

export const gstate = new GlobalState();
