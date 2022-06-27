import { forwardRef } from "react"
import { Select } from "@illa-design/select"
import { Wrapper } from "@/wrappedComponents/Wrapper"
import LabelWrapper from "@/wrappedComponents/LabelWrapper"
import { WrappedSelectProps } from "./interface"

export const WrappedSelect = forwardRef<any, WrappedSelectProps>(
  (props, ref) => {
    const {
      label,
      labelAlign,
      labelCaption,
      labelPosition,
      labelWidth,
      labelWidthUnit,
      required,
      tooltipText,
      showClear,
      options,
      value,
      placeholder,
      disabled,
      loading,
      readOnly,
      showSearch,
      inputValue,
      handleUpdateDsl,
    } = props
    return (
      <Wrapper>
        <LabelWrapper
          label={label}
          labelAlign={labelAlign}
          labelWidth={labelWidth}
          labelCaption={labelCaption}
          labelWidthUnit={labelWidthUnit}
          labelPosition={labelPosition}
          required={required}
          tooltipText={tooltipText}
        >
          <Select
            allowClear={showClear}
            options={options}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            loading={loading}
            readOnly={readOnly}
            showSearch={showSearch}
            inputValue={inputValue}
            size="small"
            onChange={(value) => {
              handleUpdateDsl({ value })
            }}
          />
        </LabelWrapper>
      </Wrapper>
    )
  },
)

WrappedSelect.displayName = "SelectWidget"

export const SelectWidget = WrappedSelect
