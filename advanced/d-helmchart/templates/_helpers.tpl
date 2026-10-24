{{- define "node-app.name" -}}
{{- .Chart.Name -}}
{{- end -}}

{{- define "node-app.fullname" -}}
{{- .Release.Name -}}
{{- end -}}
