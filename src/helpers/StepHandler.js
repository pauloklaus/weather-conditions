import StepDirection from "./StepDirection";

class StepHandler {
  constructor({
    listSize = 0,
    currentStep = 0,
    direction = StepDirection.forward,
    cyclic = true,
  }) {
    this._direction = direction;
    this._currentStep = currentStep;
    this._listSize = listSize;
    this._cyclic = cyclic;
  }

  _walkForward() {
    if (this._currentStep < this._listSize - 1) {
      this._currentStep += 1;
    } else if (this._cyclic) {
      this._currentStep = 0;
    }

    return this._currentStep;
  }

  _walkBackwards() {
    if (this._currentStep > 0) {
      this._currentStep -= 1;
    } else if (this._cyclic) {
      this._currentStep = this._listSize - 1;
    }

    return this._currentStep;
  }

  isWalkingForward() {
    return this._direction === StepDirection.forward;
  }

  isWalkingBackwards() {
    return this._direction === StepDirection.backwards;
  }

  next() {
    if (this.isWalkingForward()) {
      return this._walkForward();
    }

    return this._walkBackwards();
  }

  switchToWalkForward() {
    this._direction = StepDirection.forward;
  }

  switchToWalkBackwards() {
    this._direction = StepDirection.backwards;
  }

  get currentStep() {
    return this._currentStep;
  }

  jumpToStep(newStep) {
    if (newStep >= 0 && newStep <= this._listSize - 1) {
      this._currentStep = newStep;
    }

    return newStep;
  }
}

export default StepHandler;
