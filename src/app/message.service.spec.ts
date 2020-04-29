import { TestBed, inject } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageService = TestBed.get(MessageService);
    expect(service).toBeTruthy();
  });

  it('should return `You have been warned!`', inject(
    [MessageService],
    (msgService) => {
      msgService
        .getContent()
        .subscribe((message) =>
          expect(message).toBe('You have been warned!'),
        );
    },
  ));
});
