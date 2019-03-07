export const SUBMIT_FORM = 'SUBMIT_FORM';

export const submitFormData = form => {
  return {
    type: SUBMIT_FORM,
    value: form
  };
};
