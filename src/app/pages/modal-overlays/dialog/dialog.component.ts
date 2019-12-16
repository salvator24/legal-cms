import { Component, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ShowcaseDialogComponent } from './showcase-dialog/showcase-dialog.component';
import { DialogNamePromptComponent } from './dialog-name-prompt/dialog-name-prompt.component';

@Component({
  selector: 'ngx-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.scss'],
})
export class DialogComponent {

  names: string[] = [];

  documents: object[] = [
    {
      name: "document1",
      quantity: 1,
      agentName: ""
    },
    {
      name: "document2",
      quantity: 1,
      agentName: ""
    }
  ];

  constructor(private dialogService: NbDialogService) {}

  open() {
    this.dialogService.open(ShowcaseDialogComponent, {
      context: {
        title: 'This is a title passed to the dialog component',
      },
    });
  }

  open2(dialog: TemplateRef<any>) {
    this.dialogService.open(
      dialog,
      { context: 'this is some additional data passed to dialog' });
  }

  open3() {
    this.dialogService.open(DialogNamePromptComponent)
      .onClose.subscribe(name => name && this.names.push(name));
  }

  open4(document: object) {
    this.dialogService.open(DialogNamePromptComponent)
      .onClose.subscribe((name) => {
        document["quantity"]=name["number"];
        document["agentName"]=name["name"]
      }
    );
  }

  openWithoutBackdrop(dialog: TemplateRef<any>) {
    this.dialogService.open(
      dialog,
      {
        context: 'this is some additional data passed to dialog',
        hasBackdrop: false,
      });
  }

  openWithoutBackdropClick(dialog: TemplateRef<any>) {
    this.dialogService.open(
      dialog,
      {
        context: 'this is some additional data passed to dialog',
        closeOnBackdropClick: false,
      });
  }

  openWithoutEscClose(dialog: TemplateRef<any>) {
    this.dialogService.open(
      dialog,
      {
        context: 'this is some additional data passed to dialog',
        closeOnEsc: false,
      });
  }
}
