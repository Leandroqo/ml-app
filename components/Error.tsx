import Text from "components/Text";
import { useTranslation } from 'react-i18next';

interface Props {
  id?: string;
  message?: string;
}

export default function Error({ id, message }: Props) {
  const msg = message || "Desculpe não foi possível carregar o recurso. Tente mais tarde!"
  const testId = id || "error";
  const { t } = useTranslation();

  return (
    <Text.Span id={testId} size="12px">
      {t(msg)}
    </Text.Span>
  )
}