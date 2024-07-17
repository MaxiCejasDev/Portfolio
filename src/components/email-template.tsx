import * as React from 'react';

interface EmailTemplateProps {
  firstname: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstname,
}) => (
  <div>
    <p>{firstname}</p>
  </div>
);