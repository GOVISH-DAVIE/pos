import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { BusinessTitle } from "../business/BusinessTitle";

export const ClientCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="business.id"
          reference="Business"
          label="business"
        >
          <SelectInput optionText={BusinessTitle} />
        </ReferenceInput>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="name" source="name" />
        <TextInput label="phone" source="phone" />
      </SimpleForm>
    </Create>
  );
};
