export class LayoutOptions {
  constructor(private orientation: string) {}
  getValue() {
    return { menu: this.orientation, theme: 'dark' };
  }
}
