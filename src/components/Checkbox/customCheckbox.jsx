import { useCheckbox, Chip, VisuallyHidden, tv } from "@nextui-org/react";

const checkbox = tv({
  slots: {
    base: "bg-white border border-danger-600 hover:bg-danger-50 rounded-md h-8",
    content: "text-black",
  },
  variants: {
    isSelected: {
      true: {
        base: "bg-danger-600 border border-danger-600 hover:bg-danger-50 rounded-md h-8",
        content: "text-white hover:text-black",
      },
    },
  },
});

export const CustomCheckbox = (props) => {
  const { children, isSelected, getBaseProps, getLabelProps, getInputProps } =
    useCheckbox({
      ...props,
    });

  const styles = checkbox({ isSelected });

  return (
    <label {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <Chip
        classNames={{
          base: styles.base(),
          content: styles.content(),
        }}
        variant="faded"
        {...getLabelProps()}
      >
        {children ? children : isSelected ? "Enabled" : "Disabled"}
      </Chip>
    </label>
  );
};
