export const isRequired = () => ({
  validation: (Rule) => Rule.required(),
  codegen: { required: true },
})
