import { Box, BoxProps } from '@mui/material';
import { useTranslation } from 'react-i18next';

export interface {{component-name}}Props {
  box?: BoxProps
}

function {{component-name}}({ box } : {{component-name}}Props) {
  const { t } = useTranslation();
  const boxProps = { ...{{component-name}}.defaultProps.box, ...box } as BoxProps;
  return (
    <Box {...boxProps}>
      {t('{{var1}}')}
      <p>Camel: {{var1CamelCase}}</p>
      <p>kebab: {{var1KebabCase}}</p>
      <p>lower: {{var1LowerCase}}</p>
      <p>lowerWithSpace: {{var1LowerWithSpaceCase}}</p>
      <p>Pascal: {{var1PascalCase}}</p>
      <p>snake: {{var1SnakeCase}}</p>
      <p>upper: {{var1UpperCase}}</p>
      <p>upperKebab: {{var1UpperKebabCase}}</p>
      <p>upperSnake: {{var1UpperSnakeCase}}</p>
      <p>upperWithSpace: {{var1UpperWithSpaceCase}}</p>
    </Box>
  );
}

{{component-name}}.defaultProps = {
  box: {
    sx: { background: 'blue' },
  },
};

export default {{component-name}};
