import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

/** @title Basic virtual scroll */
@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualComponent {

  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;

  items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);

  irFinal() {
    this.viewport.scrollToIndex(this.items.length);
  }

  irInicio() {
    this.viewport.scrollToIndex(0);
  }

  irMedio() {
    this.viewport.scrollToIndex(this.items.length/2);
  }
}
