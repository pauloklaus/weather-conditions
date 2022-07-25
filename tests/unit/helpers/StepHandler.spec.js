import StepDirection from "@/helpers/StepDirection";
import StepHandler from "@/helpers/StepHandler";

describe("StepHandler", () => {
  const listSize = 10;

  it("should have the default values", () => {
    const stepHandler = new StepHandler({ listSize });

    expect(stepHandler.currentStep).toBe(0);
    expect(stepHandler.isWalkingForward).toBeTruthy();
  });

  it("should have the new current step after class instantiate", () => {
    const stepHandler = new StepHandler({ listSize, currentStep: 5 });

    expect(stepHandler.currentStep).toBe(5);
  });

  it("should jump the step", () => {
    const stepHandler = new StepHandler({ listSize });

    stepHandler.jumpToStep(9);
    expect(stepHandler.currentStep).toBe(9);
  });

  it("should move the step forward cyclic", () => {
    const stepHandler = new StepHandler({ listSize });

    stepHandler.next();
    expect(stepHandler.currentStep).toBe(1);

    stepHandler.jumpToStep(9);
    stepHandler.next();
    expect(stepHandler.currentStep).toBe(0);
  });

  it("should move the step forward non cyclic", () => {
    const stepHandler = new StepHandler({
      listSize,
      cyclic: false,
    });

    stepHandler.jumpToStep(9);
    stepHandler.next();
    expect(stepHandler.currentStep).toBe(9);
  });

  it("should move the step backwards cyclic", () => {
    const stepHandler = new StepHandler({
      listSize,
      currentStep: 5,
      direction: StepDirection.backwards,
    });

    stepHandler.next();
    expect(stepHandler.currentStep).toBe(4);

    stepHandler.jumpToStep(0);
    stepHandler.next();
    expect(stepHandler.currentStep).toBe(9);
  });

  it("should move the step backwards non cyclic", () => {
    const stepHandler = new StepHandler({
      listSize,
      currentStep: 5,
      direction: StepDirection.backwards,
      cyclic: false,
    });

    stepHandler.jumpToStep(0);
    stepHandler.next();
    expect(stepHandler.currentStep).toBe(0);
  });

});
