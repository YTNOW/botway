package pip

import "github.com/abdfnx/botway/templates"

func DockerfileContent(botName string) string {
	return templates.Content("assets/pip.dockerfile", botName)
}

func RequirementsContent() string {
	return templates.Content("telegram/python/assets/pip/requirements.txt", "")
}
